import { z } from "zod";
export declare const GetStatsSummaryResponse: z.ZodObject<{
    registeredMembers: z.ZodNumber;
    wardsCovered: z.ZodNumber;
    pilotProjectWomen: z.ZodNumber;
    commitmentPercent: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    registeredMembers: number;
    wardsCovered: number;
    pilotProjectWomen: number;
    commitmentPercent: number;
}, {
    registeredMembers: number;
    wardsCovered: number;
    pilotProjectWomen: number;
    commitmentPercent: number;
}>;
export declare const CreateMembershipApplicationBody: z.ZodObject<{
    fullName: z.ZodString;
    gender: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    state: z.ZodString;
    lga: z.ZodString;
    ward: z.ZodString;
    occupation: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
}, {
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
}>;
export declare const CreateMembershipApplicationResponse: z.ZodObject<{
    id: z.ZodNumber;
    membershipNumber: z.ZodString;
    fullName: z.ZodString;
    gender: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    state: z.ZodString;
    lga: z.ZodString;
    ward: z.ZodString;
    occupation: z.ZodString;
    status: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    status: string;
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
    id: number;
    membershipNumber: string;
    createdAt: Date;
}, {
    status: string;
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
    id: number;
    membershipNumber: string;
    createdAt: Date;
}>;
export declare const LookupMembershipQueryParams: z.ZodObject<{
    membershipNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    membershipNumber: string;
}, {
    membershipNumber: string;
}>;
export declare const LookupMembershipResponse: z.ZodObject<{
    id: z.ZodNumber;
    membershipNumber: z.ZodString;
    fullName: z.ZodString;
    gender: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    state: z.ZodString;
    lga: z.ZodString;
    ward: z.ZodString;
    occupation: z.ZodString;
    status: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    status: string;
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
    id: number;
    membershipNumber: string;
    createdAt: Date;
}, {
    status: string;
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    state: string;
    lga: string;
    ward: string;
    occupation: string;
    id: number;
    membershipNumber: string;
    createdAt: Date;
}>;
export declare const CreateVolunteerApplicationBody: z.ZodObject<{
    fullName: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    skills: z.ZodString;
    experience: z.ZodOptional<z.ZodString>;
    availability: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    phone: string;
    email: string;
    skills: string;
    availability: string;
    experience?: string | undefined;
}, {
    fullName: string;
    phone: string;
    email: string;
    skills: string;
    availability: string;
    experience?: string | undefined;
}>;
export declare const CreateVolunteerApplicationResponse: z.ZodObject<{
    id: z.ZodNumber;
    fullName: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    skills: z.ZodString;
    experience: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    availability: z.ZodString;
    status: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    status: string;
    fullName: string;
    phone: string;
    email: string;
    id: number;
    createdAt: Date;
    skills: string;
    availability: string;
    experience?: string | null | undefined;
}, {
    status: string;
    fullName: string;
    phone: string;
    email: string;
    id: number;
    createdAt: Date;
    skills: string;
    availability: string;
    experience?: string | null | undefined;
}>;
export declare const CreateContactMessageBody: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    subject: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    email: string;
    name: string;
    subject: string;
    phone?: string | undefined;
}, {
    message: string;
    email: string;
    name: string;
    subject: string;
    phone?: string | undefined;
}>;
export declare const CreateContactMessageResponse: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodString;
    message: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    message: string;
    email: string;
    id: number;
    createdAt: Date;
    name: string;
    subject: string;
    phone?: string | null | undefined;
}, {
    message: string;
    email: string;
    id: number;
    createdAt: Date;
    name: string;
    subject: string;
    phone?: string | null | undefined;
}>;
export declare const CreateNewsletterSubscriptionBody: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const CreateNewsletterSubscriptionResponse: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    email: string;
    id: number;
    createdAt: Date;
}, {
    email: string;
    id: number;
    createdAt: Date;
}>;
//# sourceMappingURL=index.d.ts.map