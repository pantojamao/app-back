import User from '../../models/User.js'

export default (req, res) => {
    try {
        // const one = await User.find();
        const one = User.find();
        if (one) {
            return res.status(200).json({ success: true, message: 'users' });
        } else {
            return res.status(404).json({ success: false, message: 'users not found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error' });
    }
}