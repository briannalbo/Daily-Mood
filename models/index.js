const User = require('./user');
const Mood = require('./moods');


User.hasMany(Mood, {
  foreignKey: 'mood_id',
});

Mood.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Mood };
