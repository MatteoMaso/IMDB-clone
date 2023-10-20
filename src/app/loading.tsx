import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center mt-10">
            <Image className="h-96"  width={150} height={150} src="spinner.svg" alt="loading" />
        </div>
    )
}
