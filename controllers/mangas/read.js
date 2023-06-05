import Chapter from '../../models/Chapter.js';

export default (req, res) => {
    try {
        // const one = await Chapter.find();
        const one = Chapter.find();
        if (one) {
            return res.status(200).json({ success: true, message: 'Chapters' });
        } else {
            return res.status(404).json({ success: false, message: 'Chapters not found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
}