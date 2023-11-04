"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

type Inputs = {
    Name: string;
    Email: string;
    Phone: number;
    Reason: string[];
    Address: string;
    TextArea: string;
    TermsAndCondition: boolean;
};

const RedMessage = styled.span`
    color: red;
    font-size: small;
`;

const CONTACT_FORM_URL = "/api/contact";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        e?.preventDefault();

        axios
            .post(CONTACT_FORM_URL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.data.success) {
                    toast(response.data.message);
                } else {
                    toast(response.data.message);
                }
            })
            .catch((error) => console.log(error))
            .finally();

        reset();
    };

    return (
        <>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
                <div className="flex flex-col justify-center items-start gap-2">
                    <h1 className="text-xl font-bold">Contact Me</h1>
                    <p>
                        Have a question about something? Please fill out the
                        contact form and I will be happy to help you out. You
                        can expect to hear back from us within 24 hours.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-start items-start gap-5"
                >
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Name&nbsp;<RedMessage>*</RedMessage>
                        </label>
                        <input
                            type="text"
                            placeholder="Full name"
                            {...register("Name", { required: true })}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                        {errors.Name && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Email&nbsp;<RedMessage>*</RedMessage>
                        </label>
                        <input
                            type="email"
                            placeholder="E-mail"
                            {...register("Email", { required: true })}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                        {errors.Email && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">Phone</label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            {...register("Phone")}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            What brings you here?&nbsp;
                            <RedMessage>*</RedMessage>
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="ReasonToSell"
                                value={"Looking to sell"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <label htmlFor="ReasonToSell">
                                Looking to sell
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="ReasonToBuy"
                                value={"Looking to buy"}
                                {...register("Reason", { required: true })}
                                className="border"
                            />
                            <label htmlFor="ReasonToBuy">Looking to buy</label>
                        </div>
                        {errors.Reason && (
                            <RedMessage>This field is required</RedMessage>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Address (if looking to sell)
                        </label>
                        <input
                            type="text"
                            {...register("Address")}
                            className="border rounded-none px-5 py-2 text-black"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="text-lg font-bold">
                            Anything else you would like to talk about?
                        </label>
                        <textarea
                            cols={30}
                            rows={5}
                            {...register("TextArea")}
                            className="border text-black px-5 py-2"
                        />
                    </div>

                    <div className="flex flex-row justify-start items-center gap-2">
                        <input
                            type="checkbox"
                            value={"true"}
                            id="TermsAndCondition"
                            {...register("TermsAndCondition", {
                                required: true,
                            })}
                        />{" "}
                        <label htmlFor="TermsAndCondition">
                            I agree to be contacted by Sumit Nanda Real Estate
                            via call, email or text.
                        </label>
                    </div>
                    {errors.TermsAndCondition && (
                        <RedMessage>Please agree to the terms</RedMessage>
                    )}
                    <input
                        type="submit"
                        className="cursor-pointer bg-[#000] p-2 rounded-md text-white"
                    />
                </form>
            </div>
        </>
    );
}
