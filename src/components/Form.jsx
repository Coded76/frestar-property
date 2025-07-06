"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  enquiry: yup.string().required("Please select an enquiry type"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+234[0-9]{10}$/, "Enter a valid Nigerian number"),
  message: yup.string().required("Message is required"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-6 md:w-[70%] w-[90%] border border-[#E0E0E0]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">Full Name *</label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Placeholder text..."
            className="w-full border border-[#E0E0E0] outline-none px-3 py-2 rounded mt-1"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium">Email Address *</label>
          <input
            type="email"
            {...register("email")}
            placeholder="hello@alignui.com"
            className="w-full border border-[#E0E0E0] outline-none px-3 py-2 rounded mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Enquiry */}
        <div>
          <label className="block text-sm font-medium">Enquiry *</label>
          <select
            {...register("enquiry")}
            className="w-full border border-[#E0E0E0] outline-none px-3 py-2 rounded mt-1"
          >
            <option value="">Select</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="other">Other</option>
          </select>
          {errors.enquiry && (
            <p className="text-red-500 text-sm">{errors.enquiry.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number *</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="NG"
                international
                placeholder="Enter phone number"
                className="w-full border border-[#E0E0E0] outline-none px-3 py-2 rounded mt-1"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium">Message *</label>
          <textarea
            rows="4"
            {...register("message")}
            placeholder="Enter detailed message"
            className="w-full border border-[#E0E0E0] outline-none px-3 py-2 rounded mt-1"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
