import arrow_back from "../../icons/coursedetail/arrow_back.png";
import video from "../../images/coursedetail/video.png";
import attachfile from "../../icons/coursedetail/attachfile.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import arrow_drop from "../../icons/coursedetail/arrow_drop.png";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function UserSectionConfirmation() {
const navigate = useNavigate();

=======

function UserSectionConfirmation() {
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
  return (
    <div>
      <section className="h-fit border-solid border-2 border-red-600 flex flex-row pt-[16px] pl-[16px] pr-[16px] xl:pl-[144px]">
        <div>
          <header className="w-[100%] h-[261.5px] md:h-[450px] xl:h-[500px] flex justify-center xl:justify-start xl:w-[739px]">
            <div className="flex flex-col">
              <div className="w-[79px] h-[32px] flex items-center gap-[8px] pl-[4px] pr-[4px]">
                <img className="w-[16px] h-[16px]" src={arrow_back}></img>
                <div className="w-[39px] h-[24px] text-[16px] font-[700] text-Blue-500">
                  Back
                </div>
              </div>
              <figure className="h-[213.5px] mt-[10px] flex flex-row gap-[24px]">
                <img
                  className="w-[343px] h-[213.5px] md:w-[450px] md:h-[320px] xl:w-[739px] xl:h-[460px] rounded-[8px]"
                  src={video}
                ></img>
              </figure>
            </div>
          </header>
          <article>
<<<<<<< HEAD
            <div className="w-[100%] h-fit mb-[15px] mt-[15px] xl:w-[739px] md:mt-[10px] xl:mt-[70px] xl:mb-[70px]">
=======
            <div className="w-[100%] h-fit mb-[30px] mt-[30px] xl:w-[739px] md:mt-[10px] xl:mt-[70px]">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
              <h1 className="text-black text-Headline3 font-Headline3 mb-[5px] xl:text-Headline2 xl:font-Headline2">
                Course Detail
              </h1>
              <p className="text-Gray-700 text-Body3 font-Body3 xl:text-Body2 xl:font-Body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum aenean fermentum, velit vel, scelerisque morbi
                accumsan. Nec, tellus leo id leo id felis egestas. Quam sit
                lorem quis vitae ut mus imperdiet. Volutpat placerat dignissim
                dolor faucibus elit ornare fringilla. Vivamus amet risus
                ullamcorper auctor nibh. Maecenas morbi nec vestibulum ac tempus
                vehicula.
              </p>
              <br />
              <p className="text-Gray-700 text-Body3 font-Body3 xl:text-Body2 xl:font-Body2">
                Vel, sit magna nisl cras non cursus. Sed sed sit ullamcorper
                neque. Dictum sapien amet, dictumst maecenas. Mattis nulla
                tellus ut neque euismod cras amet, volutpat purus. Semper purus
                viverra turpis in tempus ac nunc. Morbi ullamcorper sed elit
                enim turpis. Scelerisque rhoncus morbi pulvinar donec at sed
                fermentum. Duis non urna lacus, sit amet. Accumsan orci
                elementum nisl tellus sit quis. Integer turpis lectus eu blandit
                sit. At at cras viverra odio neque nisl consectetur. Arcu
                senectus aliquet vulputate urna, ornare. Mi sem tellus elementum
                at commodo blandit nunc. Viverra elit adipiscing ut dui, tellus
                viverra nec.
              </p>
              <br />
              <br />
              <p className="text-Gray-700 text-Body3 font-Body3 xl:text-Body2 xl:font-Body2">
                Lectus pharetra eget curabitur lobortis gravida gravida eget ut.
                Nullam velit morbi quam a at. Sed eu orci, sociis nulla at sit.
                Nunc quam integer metus vitae elementum pulvinar mattis nulla
                molestie. Quis eget vestibulum, faucibus malesuada eu. Et lectus
                molestie egestas faucibus auctor auctor.
              </p>
            </div>
          </article>
          <article>
            <div className="flex flex-col justify-between w-[100%] sm:w-[343px] sm:h-[128px]">
              <h1 className="text-Headline3 font-Headline3 text-black">
                Attach File
              </h1>
              <div className="bg-Blue-100 rounded-[8px] w-[100%] sm:w-[343px] sm:h-[82px] flex items-center gap-[16px] pl-[16px]">
                <img className="w-[50px] h-[50px]" src={attachfile}></img>
                <div className="w-[144px] h-[46px]">
                  <h1 className="text-Body2 font-Body2 text-black">
                    Service Design.pdf
                  </h1>
                  <h1 className="text-Body4 font-Body4 text-Blue-400">68 mb</h1>
                </div>
              </div>
            </div>
          </article>
          <article>
<<<<<<< HEAD
            <div className="h-[924px] mt-[70px] xl:w-[739px]">
=======
            <div className="h-[924px] mt-[25px] xl:w-[739px]">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
              <h1 className="text-black text-Headline3 font-Headline3 xl:text-Headline2 xl:font-Headline2 xl:mb-[20px]">
                Module Samples
              </h1>
              <div>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem className=" h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[62px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            01
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Introduction
                          </span>
                        </Box>
                        <div>
                          <img
                            className="w-[24px] h-[24px]"
                            src={arrow_drop}
                          ></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className="text-Gray-700 text-Body2 font-Body2 mt-[20px] pl-[40px]">
                        <li>Welcome to the Course</li>
                        <li>Course Overview</li>
                        <li>Getting to Know You</li>
                        <li>What is Service Design ?</li>
                        <li>Service Design vs. UX vs. UI vs Design Thinking</li>
                        <li>4 Levels of Service Design in an Organization</li>
                        <li>Scope of Service Design</li>
                        <li>
                          Develop an Entirely New Service - U Drink I Drive
                        </li>
                        <li>Improving Existing Services - Credit Cards</li>
                        <li>Improving Existing Services MK</li>
                        <li>Levels of Impact</li>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className=" h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[92px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            02
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Service Design Theories and Principles
                          </span>
                        </Box>
                        <div>
                          <img src={arrow_drop}></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className=" h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[92px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            03
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Understanding Users and Finding Opportunities
                          </span>
                        </Box>
                        <div>
                          <img src={arrow_drop}></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[92px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            04
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Identifying and Validating Opportunities for Design
                          </span>
                        </Box>
                        <div>
                          <img src={arrow_drop}></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[62px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            05
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Prototyping
                          </span>
                        </Box>
                        <div>
                          <img src={arrow_drop}></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="h-fit">
                    <h2>
                      <AccordionButton className="border-b-[1px] border-b-Gray-400 h-[62px]">
                        <Box as="span" flex="1" textAlign="left">
                          <span className="mr-[20px] text-Gray-700 text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            06
                          </span>
                          <span className="text-black text-Body1 font-Body1 xl:text-Headline3 xl:font-Headline3">
                            Course Summary
                          </span>
                        </Box>
                        <div>
                          <img src={arrow_drop}></img>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </article>
        </div>
        <aside className="bg-white shadow-lg xl:w-[357px] xl:h-[373px] xl:block hidden sticky top-[58px] ml-[24px] mt-[40px] pl-[24px] pt-[32px]">
          <div className="flex flex-col justify-between w-[309px] h-[309px]">
            <h1 className="w-[309px] h-[21px] text-Orange-500 text-[14px] font-[400] ">
              Course
            </h1>
            <div className="w-[309px] h-[86px]">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="mb-[1px]">
                      <Box as="span" flex="1" textAlign="left">
                        <span className="text-black text-Headline3 font-Headline3">
                          Service Design Essentials
                        </span>
                      </Box>
<<<<<<< HEAD
                    </AccordionButton>
                  </h2>
                  <p className="text-Body2 font-Body2 text-Gray-700">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </p>
=======
                      <div>
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p className="text-Body2 font-Body2 text-Gray-700">
                      Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                    </p>
                  </AccordionPanel>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Headline3 font-Headline3 w-[309px] h-[30px]">
              THB 3,559.00
            </div>
            <div className="border-solid border-t-[1px] border-Gray-400 flex flex-col justify-end h-[100px] w-[309px] ">
<<<<<<< HEAD
              <button onClick={()=>{
                navigate("/user/startlearning")
              }} className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] text-[16px] font-[700] text-white text-center w-[309px] h-[60px]">
=======
              <button className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] text-[16px] font-[700] text-white text-center w-[309px] h-[60px]">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
                Start Learning
              </button>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default UserSectionConfirmation;
