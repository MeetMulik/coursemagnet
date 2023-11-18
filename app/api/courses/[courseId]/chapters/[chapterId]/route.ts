import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { courseId: string; chapterId: string } }) {
    try {
        const { userId } = auth();
        const { isPublished, ...values } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            },
        });

        if (!ownCourse) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const chapter = await db.chapter.update({
            where: {
                courseId: params.courseId,
                id: params.chapterId
            },
            data: {
                ...values
            }
        });

        //Todo: Handle Video Upload

        return NextResponse.json(chapter, { status: 200 });

    } catch (error) {
        console.log('error', error);
        return new NextResponse("error", { status: 500 })
    }
}