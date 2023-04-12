import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    width: calc(100% - 36px);
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: white;
    border-radius: 20px;
    z-index: 20;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    gap: 0 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 100rem;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: ${(props) => props.theme.pink};
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 0 12px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }
  .card-amount {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;
    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary} fontSize={props.fontSize}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.94668e-08 5.40047C-0.000248434 3.95081 0.582385 2.56192 1.61681 1.5463C2.65124 0.530677 4.05058 -0.0263762 5.5 0.000469468C7.21732 -0.00865054 8.85599 0.719644 10 2.00047C11.144 0.719644 12.7827 -0.00865054 14.5 0.000469468C15.9494 -0.0263762 17.3488 0.530677 18.3832 1.5463C19.4176 2.56192 20.0002 3.95081 20 5.40047C20 10.7565 13.621 14.8005 10 18.0005C6.387 14.7735 7.94668e-08 10.7605 7.94668e-08 5.40047Z"
                fill="#FC2872"
              />
            </svg>
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
