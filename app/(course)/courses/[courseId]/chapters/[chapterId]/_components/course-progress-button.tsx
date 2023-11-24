"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId,
}: CourseProgressButtonProps) => {
  const Icon = isCompleted ? XCircle : CheckCircle;

  return (
    <Button type="button" variant={isCompleted ? "outline" : "success"}>
      {isCompleted ? "Completed" : "Mark as completed"}
    </Button>
  );
};

export default CourseProgressButton;
