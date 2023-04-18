import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Part2 from '../../assets/part2.png'
import { Link } from 'react-router-dom'

const CardPart2 = ({card}) => {
  return (
    <>
    {card ? (
      <Link to="part2survey/1">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea disabled={!card} style={{ opacity: card ? 1: 0.5 }}>
        <CardMedia
            component="img"
            height='100%'
            image={Part2}
            alt="green iguana"
            />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
            Personal Experience, Beliefs, Opinions and Thoughts Part 1            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    ):
    (
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea disabled={!card} style={{ opacity: card ? 1: 0.5 }}>
        <CardMedia
            component="img"
            height='100%'
            image={Part2}
            alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
            Personal Experience, Beliefs, Opinions and Thoughts Part 1            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )}
    </>
  )
}

export default CardPart2