import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading, BodyImage, MainHeading2} from '../styles/styledComponents';
  import im1 from '../assets/UnsolvedMergeSort.png';
  import im2 from '../assets/mergeSortVisHalf.png';
  import im3 from '../assets/solvedMergeSort.png';
const MergeSortVis = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap', padding: '150px 25%', }}>
      {/* <div style={{display: 'flex', flexDirection:'row', flexWrap: 'nowrap', gap: '5px', justifyContent: 'center'}}>
        <BodyImage src={im1}/>
        <BodyImage src={im2}/>
        <BodyImage src={im3}/>
      </div> */}
      <MainHeading style={{color:'black'}}>Merge Sort Visualizer</MainHeading>
      <div style={{color: 'black', textAlign:'center'}}>This program is an intuitive Merge Sort Visualizer, implemented in Python, designed to simplify and demonstrate the sorting process. It allows users to generate a set of 100 random numbers, each ranging from 1 to 100, by clicking the "Generate" button. Once the numbers are displayed, users can initiate the sorting process by clicking the "Sort" button, which uses the merge sort algorithm to methodically organize the numbers in ascending order. This Python-based visual representation provides a clear and engaging way to understand how merge sort operates step by step.</div>
      <a style={{textAlign: 'center'}} href="https://github.com/BenMcMillen/Merge-Sort-Visualizer" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im1}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Generation</MainHeading2>
          <div style={{color:'black'}}> The program is designed to offer users an interactive experience, beginning with the ability to generate a new set of unsorted values, represented visually as columns on the user interface. These columns correspond to random numerical values that are initially displayed in an unsorted order. Users can generate a fresh set of random data as many times as desired, providing flexibility in testing and visualizing different scenarios. Once the user is ready, they can press the "Solve" button to initiate the sorting process. This action triggers the merge sort algorithm, which begins sorting the values step by step, allowing users to observe how the algorithm methodically organizes the data.</div>
        </div>
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im2}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Solving</MainHeading2>
          <div style={{color:'black'}}> Once the sorting process is initiated, the program visually demonstrates the step-by-step execution of the merge sort algorithm on the data set. As the algorithm progresses, the currently active elements being worked on are highlighted in green, providing a clear and engaging representation of the sorting process. This color-coding allows users to track which portion of the data is being sorted at each stage. The visual demonstration continues until the entire data set is fully sorted, offering an intuitive and interactive way to observe how merge sort efficiently organizes the numbers.</div>
        </div>
        
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im3}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Completed Solve</MainHeading2>
          <div style={{color:'black'}}>Once the algorithm has completed sorting the data, the bars representing the numbers will change to a purple color, indicating that the sorting process is finished. At this point, the software will prompt the user to generate a new set of data, providing the option to start the sorting process again with a fresh set of unsorted values. This seamless transition allows the user to easily restart the process and continue exploring the merge sort algorithm with different data sets.</div>
        </div>
      </div>
    </div>
    
        
          
  </>;
};

export default MergeSortVis