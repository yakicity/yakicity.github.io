import Image from 'next/image'
// import mypic from "@/public/mypicture.png";
// import tsIconSrc from "app/picture/icons/ts.png";
// import javaIconSrc from "app/picture/icons/java.png";
// import pythonIconSrc from "app/picture/icons/python.png";
// import reactIconSrc from "app/picture/icons/react.png";
// import vueIconSrc from "app/picture/icons/vue.png";
// import unityIconSrc from "app/picture/icons/unity.png";
// import cIconSrc from "app/picture/icons/c.png";
// import cppIconSrc from "app/picture/icons/cpp.png";
// import processingIconSrc from "app/picture/icons/processing.png";
// import ueIconSrc from "app/picture/icons/ue.svg";
import {LanguageCard} from "./components/about/languageCard";

export default function Home() {
  return (
      <div>
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-1/4 md:w-2/5 w-5/6 mb-10 object-cover object-center rounded" alt='logo' width={100} height={100} src="/mypicture.png"/>
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
                        <LanguageCard level={1} src={"/icons/ts.png"}>
                          Solidity
                        </LanguageCard>
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">Interns</span>
                      </div>
                      <div className="md:flex-grow text-gray-900">
                        <h2 className="text-left leading-relaxed mb-2">Onplanetz株式会社(2022/3 ~ present、Machine Learning Engineer)</h2>
                        <h2 className="text-left leading-relaxed mb-2">IBS Data Science Group,KAIST(2022/8 ~ 2022/9, Research Internship)</h2>
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">Interests</span>
                      </div>
                      <div className="md:flex-grow text-gray-900">
                        <h2 className="text-left leading-relaxed mb-2">HCI × SkillTraining, Reinforcement Learning × Game, Machine Learning</h2>
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
// import Image from 'next/image'

// import mypic from "app/picture/mypicture.png";

// export default function Home() {
//   return (
//       <div>
//         <section className="text-gray-600 body-font">
//           <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//             <Image className="lg:w-1/4 md:w-2/5 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={mypic}/>
//             <div className="text-center lg:w-2/3 w-full">
//               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Yusuke Kojima  小島 悠介</h1>
//               <section className="text-gray-600 body-font overflow-hidden">
//                 <div className="container px-5 py-24 mx-auto">
//                   <div className="-my-8 divide-y-2 divide-gray-100">
//                     <div className="py-8 flex flex-wrap md:flex-nowrap">
//                       <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                         <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//                         <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
//                       </div>
//                       <div className="md:flex-grow">
//                         <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
//                         <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//                         <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//                           <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                             <path d="M5 12h14"></path>
//                             <path d="M12 5l7 7-7 7"></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="py-8 flex flex-wrap md:flex-nowrap">
//                       <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                         <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//                         <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
//                       </div>
//                       <div className="md:flex-grow">
//                         <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
//                         <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//                         <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//                           <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                             <path d="M5 12h14"></path>
//                             <path d="M12 5l7 7-7 7"></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="py-8 flex flex-wrap md:flex-nowrap">
//                       <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                         <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//                         <span className="text-sm text-gray-500">12 Jun 2019</span>
//                       </div>
//                       <div className="md:flex-grow">
//                         <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
//                         <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//                         <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//                           <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                             <path d="M5 12h14"></path>
//                             <path d="M12 5l7 7-7 7"></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//               <p className="mb-8 leading-relaxed">東京工業大学 情報理工学院 情報工学系学部4年生。</p>
//               <p className="mb-8 leading-relaxed">E-mail: kojima.y.an@m.titech.ac.jp</p>
//               <div className="flex justify-center">
//                 <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//                 <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       )
// }

// export default Home;
{/* <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section> */}