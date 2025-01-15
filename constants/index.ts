export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhaar Card",
  "PAN Card",
  "Passport",
  "Driving License",
  "Voter ID Card",
  "Medical Insurance Card/Policy",
  "Student ID Card",
  "State Domicile Certificate",
  "Pensioner Card",
  "Ration Card",
  "Birth Certificate",
  "Bank Account Passbook",
];

export const Doctors = [
  {
    image: "/assets/images/dr-arvinder.png",
    name: "Dr. Arvinder Singh Soin",
  },
  {
    image: "/assets/images/dr-sandeep.png",
    name: "Dr. Sandeep Vaishya",
  },
  {
    image: "/assets/images/dr-rakesh.png",
    name: "Dr. Rakesh Mahajan",
  },
  {
    image: "/assets/images/dr-vinod.png",
    name: "Dr. Vinod Raina",
  },
  {
    image: "/assets/images/dr-renu.png",
    name: "Dr. Renu Raina Sehgal",
  },
  {
    image: "/assets/images/dr-rajgopal.png",
    name: "Dr. Ashok Rajgopal",
  },
  {
    image: "/assets/images/dr-vivek.png",
    name: "Dr. Vivek Vij",
  },
  {
    image: "/assets/images/dr-anjali.png",
    name: "Dr. Anjali Kumar",
  },
  {
    image: "/assets/images/dr-naresh.png",
    name: "Dr. Naresh Trehan",
  },
  {
    image: "/assets/images/dr-mishra.png",
    name: "Dr Y K Mishra",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
