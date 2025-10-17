'use client';
import { SkeletonCardStyled, SkeletonContainer } from "@/app/details/[id]/page.styled";
import React from "react";


export const SkeletonDetailsCard: React.FC = () => (
  <SkeletonContainer>
    <SkeletonCardStyled>
      <div className="skeleton-image" />
      <div className="skeleton-text">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
      </div>
    </SkeletonCardStyled>
  </SkeletonContainer>
);
