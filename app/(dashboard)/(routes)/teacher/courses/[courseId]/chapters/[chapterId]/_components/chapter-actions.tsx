"use client";
import { ConfirmModal } from '@/components/modals/confirm-model';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface ChapterActionsProps {
    disabled: boolean;
    courseId: string;
    chapterId: string;
    isPublished: boolean;
}

const ChapterActions = ({
    disabled,
    courseId,
    chapterId,
    isPublished,
}: ChapterActionsProps) => {


    const router = useRouter();
    const [isloading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            if (isPublished) {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`);
                toast.success("Chapter unpublished successfully");
            }
            else {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`);
                toast.success("Chapter published successfully");
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
            toast.success("Chapter deleted successfully");
            router.refresh();
            router.push(`/teacher/courses/${courseId}`);
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex items-center gap-x-2'>
            <Button onClick={onClick} disabled={isloading || disabled} variant={"outline"} size={"sm"}>
                {isPublished ? "Unpublish" : "Publish"}
            </Button>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isloading}>
                    <Trash className='h-4 w-4' />
                </Button>
            </ConfirmModal>
        </div>
    )
}

export default ChapterActions
