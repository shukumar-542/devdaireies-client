import style from '@/app/styles/home.css'
import { FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import im1 from '@/asset/team/3L7A7445.JPG'
import im2 from '@/asset/team/sd.JPG'
import im3 from '@/asset/team/shukumar.jpg'
import im4 from '@/asset/team/towhid.jpg'
import SectionTitle from './SectionTitle';
const Team = () => {

    const teamMember = [
        {
            name: "Shukumar Shaha",
            img: "https://i.ibb.co/9bSHKSj/shukumar.jpg",
            email: "shukumar542@gmail.com",
            linkedIn: "",
            github: "https://github.com/shukumar-542",
            portfolio: "https://profile-1cf06.web.app/"
        },
        {
            name: "Towhidul Islam",
            img: "https://i.ibb.co/6HrqFdp/towhid.jpg",
            email: "towhidulislam2.bd@gmail.com",
            linkedIn: "",
            portfolio: "https://towhidulislam-portfolio.web.app/",
            github: "https://github.com/towhidulislam2023"
        },
        {
            name: "Yeasir Arafat",
            img: "https://i.ibb.co/xJLzFK5/3L7A7445.jpg",
            email: "yeasirarafat7279@gmail.com",
            linkedin: "https://www.linkedin.com/in/ysarafat/",
            portfolio: "www.ysarafat.com",
            github: ""
        },
        {
            name: "Sudipta Das",
            img: "https://i.ibb.co/LN8Shh7/sd.jpg",
            email: "sdsudiptadasdev@gmail.com",
            linkedin: "https://www.linkedin.com/in/sudiptadasweb/",
            portfolio: "https://sudiptadas-info.web.app/",
            github: "https://github.com/shiningsudipto"
        }
    ]

    return (
        <div className='section-gap'>
            <SectionTitle
                heading={"Our Team"}
                subHeading={"Designers and Developers of DEV DAIRIES"}
            ></SectionTitle>
            <section class="our-team-section">
                <div class="container">
                    <div class="">
                        <div class="grid lg:grid-cols-4 lg:gap-6 md:grid-cols-2 md:gap-4 grid-cols-1 ">
                            {
                                teamMember.map((person, idx) => {
                                    return (<div key={idx} class="our-team">
                                        <div class="pic">
                                            <img src={person.img} height={40} width={40} />
                                        </div>
                                        <div class="team-content">
                                            <h3 class="title">{person.name}</h3>
                                            <div className='flex items-center justify-center'>
                                                <p><GrMail className='me-2 text-[#7ab92d]' /></p>
                                                <p class="post">{person.email}</p>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li>
                                                <a href={person.portfolio} target="_blank"><FaLink /></a>
                                            </li>
                                            <li>
                                                <a href={person.github} target="_blank"><FaGithub /></a>
                                            </li>
                                            <li>
                                                <a href={person.linkedin} target="_blank"><FaLinkedinIn /></a>
                                            </li>
                                        </ul>
                                    </div>)
                                })
                            }
                            {/* <div class="our-team">
                                <div class="pic">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" />
                                </div>
                                <div class="team-content">
                                    <h3 class="title">Team 1</h3>
                                    <span class="post">Inhaber & Geschäftsführer</span>
                                </div>
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank" class="fa fa-facebook"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa fa-twitter"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa fa-google-plus"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="fa fa-linkedin"></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;