/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../components/header";
import { Container, ListGroup, Col, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Header />
      <Container
        fluid
        className="p-4 bg-secondary bg-gradient text-white h-100"
      >
        <Row>
          <Col sm={9}>
            <Row>
              <div className=" border mb-3">
                <h3>Обо мне</h3>
                <p>
                  Мне 30 лет, я Frontend-разработчик, с богатым опытом в
                  руководстве продажами. Знаком с полным циклом разработки от
                  проектирования компонентов и до разработки архитектуры
                  проекта. Могу настроить клиент-серверное взаимодействие в
                  соответствии с REST API, имею опыт создания приложений в
                  связке REACT/REDUX/TYPESCRIPT. Я открытый и коммуникабельный,
                  внимательно отношусь к деталям. Люблю чистый код и красивый,
                  интуитивно понятный дизайн. На данный момент я хочу
                  развиваться профессионально в рамках большого проекта с
                  сильной командой.
                </p>
              </div>
            </Row>
            <Row>
              <div className=" border mb-3 ">
                <h3>Опыт работы</h3>
                <h4>Frontend-разработчик в Reptilians.band</h4>
                <p>
                  Идея компании Reptilians состоит в том, чтобы разрушить
                  традиционный способ взаимодействия пользователя и компании и
                  создать революционный децентрализованный подход, при котором
                  члены сообщества могут напрямую влиять на разработку наших
                  продуктов с помощью NFT. Компания создает мобтильные игры и
                  WEB3- экосистему. Мои задачи: Разработка архитектуры и
                  react-компонентов spa-сайта с учетом возможности дальнейшего
                  расширения функционала. Верстка по существующему макету в
                  Figma; Разработка react-компонентов для маркетплейса; Базовый
                  CI/CD. Интергация Metamask;
                </p>
              </div>
            </Row>
            <Row>
              <div className="border">
                <h3>Контакты</h3>
                <p className="m-0">Телефон: +7(912)744-90-01</p>
                <p className="m-0">Почта: tonywk@ya.ru</p>
                <p className="m-0">
                  Telegram:
                  <a className="text-white" href="https://t.me/tonywk">
                    https://t.me/tonywk
                  </a>
                </p>
              </div>
            </Row>
          </Col>
          <Col sm={3}>
            <div className=" border p-2">
              <h3>Стэк</h3>
              <div>
                <span className="fw-bold">Frontend:</span>
                <ListGroup>
                  <ListGroup.Item>JavaScript ES6</ListGroup.Item>
                  <ListGroup.Item>TypeScript</ListGroup.Item>
                  <ListGroup.Item>React,Redux,NextJS</ListGroup.Item>
                  <ListGroup.Item>HTML5, CSS3, SCSS</ListGroup.Item>
                  <ListGroup.Item>Tailwind, ChackraUI, Figma</ListGroup.Item>
                </ListGroup>
                <span className="fw-bold">Backend:</span>
                <ListGroup>
                  <ListGroup.Item>Node.js, Express</ListGroup.Item>
                  <ListGroup.Item>Firebase, MongoDB</ListGroup.Item>
                </ListGroup>
                <span className="fw-bold">Взаимодействие</span>
                <ListGroup>
                  <ListGroup.Item>Git, CI/CD,Slack, Jira</ListGroup.Item>
                </ListGroup>
                <span className="fst-italic">Планирую освоить:</span>
                <ListGroup>
                  <ListGroup.Item className="bg-gray-200">
                    React Native, Socket.io, GrafQL
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="p-4 bg-secondary bg-gradient text-white h-100"
      >
        {" "}
        <br /> <br />
        {"  "}
        <br />
        {"  "}
      </Container>
    </>
  );
}
