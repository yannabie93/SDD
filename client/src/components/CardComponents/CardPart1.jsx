import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Part1 from '../../assets/part1.jpg'
import { Link } from 'react-router-dom'
const CardPart1 = ({card}) => {
  console.log(card)
  return (
    <>
      {card ? (
        <Link to="part1survey/1">
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea disabled={!card} style={{ opacity: card ? 1: 0.5 }}>
              <CardMedia
                  component="img"
                  height='100%'
                  image={Part1}
                  alt="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
                  Demographic Profile of Respondent and Employment
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
                  image={Part1}
                  alt="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="subtitle1" color="text.secondary" fontWeight={700} component="div" textAlign={"center"}>
                  Demographic Profile of Respondent and Employment
                  </Typography>
                
              </CardContent>
              </CardActionArea>
        </Card>
      )}
    </>
    
  )
}

export default CardPart1