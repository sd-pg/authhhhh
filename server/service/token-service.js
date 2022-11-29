const jwt = require('jsonwebtoken');
const {Tokens} = require('../models');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async   saveToken(userId, refreshToken) {
        const tokenData = await Tokens.findOne({where: {userId: userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await Tokens.create({ userId, refreshToken})
        return token;
    }

}

module.exports = new TokenService();