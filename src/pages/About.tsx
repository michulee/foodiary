import Container from "@components/elements/Container"
import styled from "styled-components/macro"

const SectionIntro = styled.section`
@media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
}
`

const SectionTech = styled.section`

`
const Image = styled.img`
display: block;
justify-content: center;
object-fit: cover;
object-position: 50% 30%;
max-height: 400px;
max-width: 100%;
margin: 0 auto;
`
const Content = styled.div`
padding: 0 1rem;
`
const About = () => {
    return(
        <Container>
            <SectionIntro>
                <Image src="https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="heart shaped kiwi fruit"/>
                <Content>
                    <h2>About Foodiary</h2>
                    <p>Maybe grandma's decided to share her handwritten cookbook, so you're finding ways to digitalize it. Perhaps you've just created a unique marinade, and you just want the whole world to know about it.</p>
                    <p>Foodiary is a place where you can post, share, and like food-related recipes and articles with your friends and family. At least, that's the long-term goal for this website. Development takes a lot of time, and this project is still a work-in-progress.</p>
                    <p>Thank you for checking out this little labor of love. Now and in the future, I want to push out quality projects that I can proudly talk about.</p>
                    <p><strong>Technologies: </strong>The frontend is built on React, React Router, and TypeScript. The backend uses Node.js, Express, and MongoDB while being deployed on a DigitalOcean Droplet with Ubuntu and NGINX.</p>
                </Content>
            </SectionIntro>
            <SectionTech>
                <Content>
                    <h2>Frontend Client</h2>
                    <p>React, React Hooks, React Router v6, Styled Components, REST API</p>
                    <h2>Backend Server</h2>
                    <p>Express, MongoDB</p>
                    <h2>Hosting</h2>
                    <p>Netlify, DigitalOcean Droplet with Ubuntu using NGINX</p>
                </Content>
            </SectionTech>
        </Container>
    )
}

export default About