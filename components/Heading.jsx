"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: none;
  background-color: #FF0000;
  border-radius: 50px;
  color: #ffffff;
  font-weight: bold;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #FF0000
  }
`;

export default function Heading() {
  return (
    <div className="flex flex-row justify-between shadow-2xl bg-dark-800">
      <div className="flex flex-row">
        <Image
          src="/icon.png"
          alt="Icon Weblify"
          width={70}
          height={20}
          quality={100}
          className="p-3"
        />
        <p className="text-secondary text-lg font-bold h-5 my-5">Weblify.</p>
      </div>

      <div>
        <Link href="https://4hh2t32zdz2.typeform.com/to/B1Ny0EaU" target="_blank">
          <ButtonContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Añadir web</span>
          </ButtonContainer>
        </Link>
      </div>
    </div>
  );
}
