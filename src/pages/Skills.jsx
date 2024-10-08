import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
    <div className="basic_box">
    <span class="intro">"보여드릴 수 있는 능력"</span>
    <h1 className='mb-5 black_font flex_underline'><i class="ri-links-line"></i><span className="block_underline">Skills</span></h1>
    <p className='mt-5 '>
    개발 입문 언어를 C언어로 시작하여 언어 사용에 감을 익혔습니다. 대학교에서 C언어 기반인 Arduino로 처음 학습하였고 후에 Python을 이용한 통계학을 배우며 프로그래밍언어에 관심을 가지게 되었습니다. 
    후에 Andrioid Stuido를 학습하며 Java에 대해 알게되어 졸업 후 Java 개발자 양성과정을 들으며 웹 개발에 대한 기초를 학습하였습니다. 수료 후 Java를 바탕으로 자료구조, 알고리즘 그리고 운영체제를 공부하고 
    DB와 연동해 간단한 웹서비스는 혼자서 개발할 수 있으며, Rest API 를 이용한 Web Server를 구현할 수 있습니다.현재는 배포중인 서비스를 계속 업데이트 해나가고 있습니다. 
    빠르고 효율적인 개발자가 되기위해 Spring 뿐만 아닌 SpringBoot도 공부중에 있고 Django에 관심이 생겨 앞으로 더 많은 프레임워크로 여러 개발을 할 예정입니다. 
    </p>
    <div className="skill_box mt-5"> 
    <ul className="myskill me-4"> 
        <li>
          <h5>Java(Servlet)</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#EA2D2E' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        처음으로 서버와 클라이언트를 나누어 웹개발 JNDI를 사용해 JDBC 연결 DataSource를 가져와서 데이터베이스(MySQL)와 연동 Servlet을 활용한 게시판, 블로그 작업 구현, 파일 및 이미지 입·출력 관리
        <li>
          <h5>Spring framework</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '90%',  backgroundColor: '#6DB33F'  }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </li>
        Spring으로 REST API를 활용하여 웹 서비스를 개발, JPA를 활용하고 spring security 인증 절차기반 로그인을 구현 및 Mybatis와 tiles를 활용한 Spring MVC 구현, 파일 및 이미지 입·출력 관리
        <li>
          <h5>React</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: '#61DAFB'  }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              75%
            </div>
          </div>
        </li>
        React기반 포트폴리오 웹사이트 제작·배포, jsx와 화살표 함수를 이용한 편리한 UI설계, useState 및 useEffect과 같은 React Hooks 사용으로 재사용성과 간결성 확보하여 개발했습니다.
        <li>
          <h5>JavaScript</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#F7DF1E'  }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        JavaScript, JQuery를 활용하여 이벤트 생성·호출 및 Ajax, Json타입 활용으로 서버와 비동기 통신하여 데이터를 분할하여 읽어오는 방법을 구현할 수 있습니다.		
        <li>
          <h5>Python</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '50%', backgroundColor: '#306998'  }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              50%
            </div>
          </div>
        </li>
        라이브러리 Numpy, Pandas, Matplotlib 등을 활용한 데이터 분석 및 통계학 공부 · 다차원 배열과 정규분포도 생성으로 데이터를 시각화하여 정보를 얻어 해결하는 방법을 배웠습니다. 		
      </ul>
      <ul className="myskill ">
        <li>
          <h5>HTML5</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#F06529'  }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        가장 기본적인 웹페이지 제작 틀로 많이 사용해왔습니다. 다른 언어들과 호환성을 위해 JSP, Thymeleaf, Mustache와 같은 템플릿 엔진을 활용해 제작가능합니다. 		
        <li>
          <h5>CSS3</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#1572B6'  }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        다수의 Animation을 활용하여 시각적으로 풍부하게 표현가능, Bootstrap Materialize Ant Design과 같은 CSS 프레임워크·UI 라이브러리 사용경험이 있습니다.   		
        <li>
          <h5>GitHub</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#181717'  }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </li>
        팀프로젝트와 협업을 위해 GitHub를 사용했고 IDE와 Git을 연결하여 사용 할 수 있습니다. GitHub Pages를 이용해 배포한 경험이 있으며 현재까지도 꾸준히 형상관리를 위해 Git을 활용하고 있습니다.
        <li>
          <h5>MySQL</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#00758F'  }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </li>
        전부터 자격증 취득을 위해 SQL에 대해 꾸준히 공부해왔습니다. 그동안 데이터베이스와 통신을 위해 대부분 SQL문을 사용했고 프로젝트 개발 시 MySQL를 이용해 DB설계·관리 및 CRUD작업을 통해 개발하였습니다. 
        <li>
          <h5>Node.JS</h5>
          <div className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: '50%', backgroundColor: '#8CC84B'  }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              50%
            </div>
          </div>
        </li>
        클라이언트 측에서 React로 axios 라이브러리를 이용하여 API를 호출해 서버측(백엔드)과 연결해 Node.js를 사용 폼에 대한 정보를 주고받는 연습을 했습니다. React 사용이 많아지면서 앞으로 더 연구하고 싶은 런타임 환경입니다.  		   		
      </ul>
    </div>
    </div>
    </section>
  )
}

export default Skills