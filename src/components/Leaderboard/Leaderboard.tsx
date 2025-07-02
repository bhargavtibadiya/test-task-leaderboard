import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { LeaderboardProps, RankedUser } from '../../types/leaderboard';
import styles from './Leaderboard.module.css';

const Leaderboard: React.FC<LeaderboardProps> = ({ 
  users, 
  title = "Global Leaderboard", 
  maxUsers = 10 
}) => {
  // Sort users by score and assign ranks
  const rankedUsers: RankedUser[] = users
    .sort((a, b) => b.score - a.score)
    .slice(0, maxUsers)
    .map((user, index) => ({
      ...user,
      rank: index + 1
    }));

  const formatScore = (score: number): string => {
    return score.toLocaleString();
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getTrophyIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className={`${styles.trophyIcon} ${styles.trophyGold}`} />;
      case 2:
        return <Medal className={`${styles.trophyIcon} ${styles.trophySilver}`} />;
      case 3:
        return <Award className={`${styles.trophyIcon} ${styles.trophyBronze}`} />;
      default:
        return null;
    }
  };

  const getUserCardClass = (rank: number) => {
    const baseClass = styles.userCard;
    switch (rank) {
      case 1:
        return `${baseClass} ${styles.podiumFirst}`;
      case 2:
        return `${baseClass} ${styles.podiumSecond}`;
      case 3:
        return `${baseClass} ${styles.podiumThird}`;
      default:
        return baseClass;
    }
  };

  const getRankClass = (rank: number) => {
    const baseClass = styles.rank;
    switch (rank) {
      case 1:
        return `${baseClass} ${styles.podiumRank}`;
      case 2:
        return `${baseClass} ${styles.podiumRank} ${styles.silver}`;
      case 3:
        return `${baseClass} ${styles.podiumRank} ${styles.bronze}`;
      default:
        return baseClass;
    }
  };

  const getAvatarClass = (rank: number) => {
    const baseClass = styles.avatar;
    switch (rank) {
      case 1:
        return `${baseClass} ${styles.podiumAvatar}`;
      case 2:
        return `${baseClass} ${styles.podiumAvatar} ${styles.silver}`;
      case 3:
        return `${baseClass} ${styles.podiumAvatar} ${styles.bronze}`;
      default:
        return baseClass;
    }
  };

  const getNameClass = (rank: number) => {
    return rank <= 3 ? `${styles.name} ${styles.podiumName}` : styles.name;
  };

  const getScoreClass = (rank: number) => {
    return rank <= 3 ? `${styles.score} ${styles.podiumScore}` : styles.score;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className={styles.leaderboard}>
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {title}
        </motion.h1>

        <motion.div 
          className={styles.leaderboardGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="User leaderboard rankings"
        >
          {rankedUsers.map((user) => (
            <motion.div
              key={user.id}
              className={getUserCardClass(user.rank)}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              role="listitem"
              aria-label={`${user.name}, rank ${user.rank}, score ${formatScore(user.score)}`}
            >
              <div className={getRankClass(user.rank)}>
                {user.rank}
                {getTrophyIcon(user.rank)}
              </div>

              <div className={getAvatarClass(user.rank)}>
                {user.avatarUrl ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={`${user.name}'s avatar`}
                    className={getAvatarClass(user.rank)}
                  />
                ) : (
                  getInitials(user.name)
                )}
              </div>

              <div className={styles.userInfo}>
                <h3 className={getNameClass(user.rank)}>
                  {user.name}
                </h3>
                <p className={styles.subtitle}>
                  {user.rank <= 3 ? 'Champion' : 'Competitor'}
                </p>
              </div>

              <div className={styles.scoreContainer}>
                <div className={getScoreClass(user.rank)}>
                  {formatScore(user.score)}
                </div>
                <div className={styles.scoreLabel}>
                  Points
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;