import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


const CharacterCard = props => {
  
  // const { image, name, species, status } = props.chars;
  
  return (
    <Card>
    <Image src={props.char.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.char.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.char.status}</span>
      </Card.Meta>
      <Card.Description>
        {props.char.species}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {`See more of: ${props.char.name}`}
      </a>
    </Card.Content>
  </Card>
  )
}

export default CharacterCard;