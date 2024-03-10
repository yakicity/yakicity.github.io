import { PT_Serif } from "next/font/google";

const PTSerif400 = PT_Serif({
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export default function RootLayout(props: {
    children: React.ReactNode;
    // modal: React.ReactNode;
  }) {
    return (

        <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <h3 className="text-[2rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[1rem]">
                        Works
                    </h3>
                    <div>
                        {props.children}
                        {/* {props.modal} */}
                    </div>
                </div>
        </section>


    );
  }

