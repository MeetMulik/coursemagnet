"use client";
import { ConfirmModal } from '@/components/modals/confirm-model';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface ActionsProps {
    disabled: boolean;
    courseId: string;
    isPublished: boolean;
}

const Actions = ({
    disabled,
    courseId,
    isPublished,
}: ActionsProps) => {


    const router = useRouter();
    const [isloading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            if (isPublished) {
                await axios.patch(`/api/courses/${courseId}/unpublish`);
                toast.success("Course unpublished successfully");
            }
            else {
                await axios.patch(`/api/courses/${courseId}/publish`);
                toast.success("Course published successfully");
            }
            router.refresh();

        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}`);
            toast.success("Course deleted successfully");
            router.refresh();
            router.push(`/teacher/courses`);
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

export default Actions
