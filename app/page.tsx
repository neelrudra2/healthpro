import PasskeyModal from "@/components/PasskeyModal";
import PatientForm from "@/components/ui/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <p className="mb-12 h-10 w-fit text-center text-2xl font-bold">
            🩺 HealthPro
          </p>

          <PatientForm />

          <div className="text-18-regular m-10 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 HealthPro
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
