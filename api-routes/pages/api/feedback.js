import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
    return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const handler = (req, res) => {
    if (req.method === "POST") {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: Math.floor(Math.random() * 100),
            email: email,
            text: feedbackText,
        };

        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);

        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({
            message: "Feedback Added",
            feedback: newFeedback,
        });
    } else {
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);
        res.status(200).json({ feedback: data });
    }
};

export default handler;
