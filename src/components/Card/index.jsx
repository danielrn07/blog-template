import styled from "styled-components"

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;  
`;

const Card = (props) => {
  return (
    <div className="rounded-md shadow overflow-hidden">
      <div>
        <img src={props.img} className="w-full h-32 object-cover"></img>
        <div className="p-4">
          <h1 className="text-orange-400 mb-1 font-medium text-xl">{props.title}</h1>
          <Description>{props.description}</Description>
        </div>
      </div>
    </div>
  );
};

export default Card