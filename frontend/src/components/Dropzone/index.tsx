import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { MdCloudUpload  } from "react-icons/md";

import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)

    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])
  
  const {getRootProps, getInputProps} = useDropzone({
     onDrop,
     accept: 'image/*'
    })

  return (
    <div className = "dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept = 'image/*' />
      {selectedFileUrl
       ? <img src={selectedFileUrl} alt="Project"/>
       : ( 
        <p>
          <MdCloudUpload size={20} color = "#7159c1"/>
          Imagem do Projeto
        </p>
       )
      }
    </div>
  )
}

export default Dropzone