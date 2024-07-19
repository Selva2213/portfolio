import React, { useEffect, useState } from "react";
import { Services } from "../Config/Config";
import styled from "styled-components";

function About() {
  const [age, setAge] = useState("");
  const yearOfBirth = "2001";
  const getAge = () => {
    setAge(new Date().getFullYear() - yearOfBirth);
  };
  useEffect(() => {
    getAge();
  });
  return (
    <Wrapper className="about-section">  
      <div className="card-inner">
        <div className="card-wrap">
          <div className="content about">
            <div className="title"  data-aos="fade-up">
              <span className="first-word">About </span>
              Me
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="text-box"  data-aos="fade-up">
                  Myself
                  <b> Selvakumar, </b>
                  <p>
                  As a recent graduate with a Bachelor's degree in Information Technology, I am eager to embark on my career in the IT industry.
                  My academic background has provided me with a solid foundation in various aspects of IT, including software development, database
                  management, network administration, and cybersecurity.I have hands-on experience with programming languages such as Java, Python,
                  and C++, as well as familiarity with web development technologies like HTML, CSS, and JavaScript.During my academic career, I have worked
                  on several projects that have honed my problem-solving skills and ability to work effectively in a team. Notably, I contributed to the
                  development of a web-based application for managing university resources, where I played a key role in designing the user interface and 
                  integrating the backend database.I am a quick learner with a strong desire to stay updated with the latest industry trends and technologies. 
                  My ability to adapt to new challenges and my passion for technology drive me to continuously improve my skills and knowledge. I am particularly 
                  interested in opportunities that allow me to apply my technical expertise in a practical setting, contribute to innovative projects, and grow 
                  within a dynamic organization.I am excited to bring my enthusiasm, technical skills, and dedication to an organization where I can contribute
                   to achieving its goals while advancing my career in the IT field.
                  </p>
                </div>
              </div>
              <div className="col col-6 border-line-v">
                <div className="info-list"  data-aos="fade-up">
                  <ul>
                    <li>
                      <strong>Age: </strong>
                      20
                    </li>
                    <li>
                      <strong>Birthday: </strong>22 July 2004
                    </li>
                    <li>
                      <strong>Hometown: </strong>Dharapuram, Tiruppur
                    </li>
                    <li>
                      <strong>Gmail: </strong>selvakumar101ad@gmail.com
                    </li>
                    <li>
                      <strong>Residence: </strong>Coimbatore
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          
          <div className="content hobby">
            <div className="title">
              <span>Hobbies</span>
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="hobby-list">
                  <ul>
                    <li>
                      <strong>Reading books</strong>
                    </li>
                    <li>
                      <strong>Gardening</strong>
                    </li>
                    <li>
                      <strong>Travelling</strong>
                    </li>
                    <li>
                      <strong>Learn new languages</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
.content.about .row .col.col-6 {
  width: 100%;
  &::before {
    content: initial;
  }
  .info-list {
    padding-top: 0;

    ul {
      margin: 0;
      padding: 0;
      font-size: 0;
      list-style: none;
      overflow: hidden;

      li {
        line-height: 1.6;
        position: relative;
        text-align: right;
        padding: 0 0 5px 0;
        display: inline-block;
        vertical-align: top;
        width: 50%;
        text-align: left;
        font-size: 0.8rem;
        color: rgb(${({ theme }) => theme.title.secondary});

        &:first-child {
          padding-top: 0;
        }
      }
    }
  }
  
}
.content.hobby .row .col.col-6{
    width: 100%;
    &::before {
      content: initial;
    }
    .hobby-list {
        padding-top: 0;
    
        ul {
          margin: 0;
          padding: 0;
          font-size: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          li {
            line-height: 1.6;
            position: relative;
            padding: 0 5px 0px 5px;
            display: inline-block;
            vertical-align: top;
            flex-grow: 1;
            text-align: left;
            font-size: 0.89rem;
            color: rgb(${({ theme }) => theme.title.secondary});
            &:first-child {
              padding-top: 0;
            }
          }
        }
      }
}
.content .row{
    &::before{
        content: normal;
      }
}
.content.about .row .col.col-6:first-child {
  padding-bottom: 0;
}
.content.about .row .col.col-6:nth-child(2) {
  padding-right: 10px;
  padding-top: 15px;
}
@media (max-width: 1240px) {
  .content.about .row .col.col-6 .info-list ul li {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
}
.content.services .row .col.col-6 {
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .name {
      font-weight: 500;
      font-size: 1.06rem;
      color: rgb(${({ theme }) => theme.title.primary});
    }
    .icon {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      border-radius: 50%;
      justify-content: center;
      background-color: ${({ theme }) => theme.highlight.primary};
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
    .desc {
      p {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }

}



  @media (min-width: 561px){
    .service-items.border-line-v:after {
        margin: 0 0 0 -1px;
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        
        background: radial-gradient(
          ellipse at top,
          #dddddd 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
  }

`
