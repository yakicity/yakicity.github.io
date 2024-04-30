import Image from 'next/image'
import {LanguageCard} from "./components/about/languageCard";

export default function Home() {
  return (
      <div>
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-1/5 md:w-2/5 w-5/6 mb-10 object-cover object-center rounded" alt='logo' width={50} height={50} src="/mypic_circle.png"/>
            {/* <Image className="lg:w-1/4 md:w-2/5 w-5/6 mb-10 object-cover object-center rounded" alt='logo' src={mypic}/> */}
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Yusuke Kojima  小島 悠介</h1>
                <div className="container px-5 py-24 mx-auto text-black-600 body-font overflow-hidden">
                  <div className="-my-8 divide-y-2 divide-gray-300">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="title-font text-gray-700">Information</span>
                      </div>
                      <div className="md:flex-grow text-gray-900">
                        <h2 className="leading-relaxed text-left ">東京工業大学 情報理工学院 情報工学系学部4年生</h2>
                        {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">東京工業大学 情報理工学院 情報工学系学部4年生</h2> */}
                        <p className="leading-relaxed text-left ">研究分野: HCI(Human-Computer-interaction)</p>
                        <p className="leading-relaxed text-left ">研究内容: MR縫合訓練システムにおける器具姿勢教示手法</p>
                        {/* https://www.wiss.org/WISS2023Proceedings/data/2-B03.pdf */}
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">Languages</span>
                      </div>
                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          flexWrap: "wrap", // コンポーネントがはみ出した場合に折り返すようにする指定
                          gridTemplateColumns: "repeat(auto-fit, 150px)",
                          gap: "10px",
                          justifyContent: "left",
                        }}
                        className="flex"
                      >
                        <LanguageCard level={4} src={"/icons/python.png"}>
                          Python
                        </LanguageCard>
                        <LanguageCard level={2} src={"/icons/pytorch.png"}>
                          Pytorch
                        </LanguageCard>
                        <LanguageCard level={2} src={"/icons/unity.png"}>
                          Unity
                        </LanguageCard>
                        <LanguageCard level={2} src={"/icons/c.png"}>
                          C
                        </LanguageCard>
                        <LanguageCard level={1} src={"/icons/java.png"}>
                          Java
                        </LanguageCard>
                        <LanguageCard level={1} src={"/icons/ts.png"}>
                          TypeScript
                        </LanguageCard>
                        <LanguageCard level={1} src={"/icons/react.png"}>
                          React
                        </LanguageCard>
                        <LanguageCard level={1} src={"/icons/solidity.svg"}>
                          Solidity
                        </LanguageCard>
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">Interns</span>
                      </div>
                      <div className="md:flex-grow text-gray-900">
                        <h2 className="text-left leading-relaxed mb-2">Onplanetz株式会社(2022/3 ~ present, Machine Learning Engineer)</h2>
                        <h2 className="text-left leading-relaxed mb-2">IBS Data Science Group, KAIST(2022/8 ~ 2022/9, Research Internship)</h2>
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">Interests</span>
                      </div>
                      <div className="md:flex-grow text-gray-900">
                        <h2 className="text-left leading-relaxed mb-2">HCI × SkillTraining, Reinforcement Learning × Soccer, Machine Learning</h2>
                      </div>
                    </div>
                  </div>
                </div>
              <p className="mb-8 leading-relaxed text-gray-900">E-mail: kojima.y.an@m.titech.ac.jp</p>
            </div>
          </div>
        </section>
      </div>
      )
}