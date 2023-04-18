import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Part3 from '../../assets/part3.jpg'
import { Link } from 'react-router-dom'

const CardPart3 = ({card}) => {
  return (
   <>
   {card ? (
    <Link to="part3survey/1">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea disabled={!card} style={{ opacity: card ? 1: 0.5 }}>
            <CardMedia
                component="img"
                height='100%'
                image={Part3}
                alt="green iguana"
                />
            <CardContent>
            <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
                Personal Experience, Beliefs, Opinions and Thoughts Part 2           
            </Typography>
            
            </CardContent>
      </CardActionArea>
      </Card>
    </Link>
   ):(
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea disabled={!card} style={{ opacity: card ? 1: 0.5 }}>
          <CardMedia
              component="img"
              height='100%'
              image={Part3}
              alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
              Personal Experience, Beliefs, Opinions and Thoughts Part 2           
          </Typography>
          
          </CardContent>
    </CardActionArea>
    </Card>
   )}
   </>
  )
}

export default CardPart3