import React from "react";

import { Card, Icon } from 'semantic-ui-react'


export default function LocationCard({ name, type, dimension, residents }) {
  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')
  
  return (
    <Card>
      <Card.Content header='About Amy' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />4 Friends
      </Card.Content>
    </Card>
  )
}
