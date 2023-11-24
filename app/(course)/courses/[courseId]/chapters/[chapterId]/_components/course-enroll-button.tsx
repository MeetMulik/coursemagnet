"use client";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const CourseEnrollButton = ({
    price,
    courseId,
}: {
    price: number;
    courseId: string;
}) => {
    const [isLoading, setIsLoading] = React.useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const reponse = await axios.post(`/api/courses/${courseId}/checkout`);
            window.location.assign(reponse.data.url);
        } catch (error) {
            toast.error("Something went wrong, please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={onClick} disabled={isLoading} className="w-full">
            Enroll for {formatPrice(price)}
        </Button>
    );
};

export default CourseEnrollButton;
