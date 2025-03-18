module.exports = () => ({
	'users-permissions': {
		config: {
			jwtSecret: process.env.JWT_SECRET,
			jwt: {
				expiresIn: '7d',
			},
		},
	}
});
