import { prisma } from "./prisma";

export const getImages = async () => {
    try {
        const result = await prisma.upload.findMany({
            orderBy: { createdAt: "desc" },

        });
        return result;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}