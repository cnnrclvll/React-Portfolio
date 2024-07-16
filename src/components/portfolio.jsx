import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import visualizer from '../assets/images/visualizerThumb.png';
import board from '../assets/images/boardThumb.png';
import PWA from '../assets/images/PWAThumb.png';
import employee from '../assets/images/employeeThumb.png';
import readme from '../assets/images/readmeThumb.png';
import SMN from '../assets/images/SMNThumb.png';
import SVG from '../assets/images/SVGThumb.png';
import checkrd from '../assets/images/checkrdThumb.png';

export default function Portfolio () {
  const projects = [
    { id: 1, title: 'Checkrd Gaming Ecommerce', thumbnail: checkrd, link: 'https://project-3-11g7.onrender.com/', description:'', alt:'' },
    { id: 2, title: 'Anytime Visualizer', thumbnail: visualizer, link: 'https://devonwilson87.github.io/musicVisualizer/', description:'', alt:'' },
    { id: 3, title: 'Board', thumbnail: board, link: 'https://surfboard-9ce7206b709e.herokuapp.com/' },
    { id: 4, title: 'PWA Text Editor', thumbnail: PWA, link: 'path-to-project-1', description:'', alt:'' },
    { id: 5, title: 'Employee CLI Database Manager', thumbnail: employee, link: 'path-to-project-1', description:'', alt:'' },
    { id: 6, title: 'Professional README Generator', thumbnail: readme, link: 'path-to-project-1', description:'', alt:'' },
    { id: 7, title: 'Social Media Network API', thumbnail: SMN, link: 'path-to-project-1', description:'', alt:'' },
    { id: 8, title: 'SVG Logo Generator', thumbnail: SVG, link: 'path-to-project-1', description:'', alt:'' },

    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      {projects.map(project => (
        <a href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
        <Card sx={{ width: 345, height: 345, backgroundColor: 'darkgray' }}>

          <CardMedia component="img" alt="screenshot of application" height="70%" image={project.thumbnail}/>

          <CardContent class="card-content">
            <Typography gutterBottom component="div" fontFamily="Syncopate-B">
              {project.title}
            </Typography>

            {/* <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography> */}

            <CardActions>
              <Button size="small">            
                <Typography variant="h8" color="text.secondary" fontFamily="Syncopate-R">
                  SOURCE CODE
                </Typography>
              </Button>
            </CardActions>

          </CardContent>
        </Card>
        </a>
      ))}
    </div>
  );
}
