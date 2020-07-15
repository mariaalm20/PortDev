import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react'


import {Link} from 'react-router-dom'

import api from '../../services/api'
import axios from 'axios'

import {
   Grid,
   Container,
   Form,
   FieldRow,
   Field,
   Address,
   FieldSet,
   Row,
   Column,
   Title,
   InputLink,
   Label,
   TextArea,
   TechsList,
   TechsListLi,
   ImageProject,
   Button
  } from './styles'

import Header from '../../components/HeaderCreateProject'
import Dropzone from '../../components/Dropzone'

interface Tech {
  id: number,
  title: string,
  image_url: string
}

interface IBGEUfResponse {
   sigla: string
}

interface IBGECityResponse {
  nome: string
}



const CreateProject = () => {
  const [techs, setTechs] = useState<Tech[]>([])
  const [selectedTechs, setSelectedTechs] = useState<number[]>([])

  const [ formData, setFormData] = useState({
    link: ''
  })

  const [ formDataArea, setFormDataArea] = useState({
    description: '',
  })

  const [ufs, setUfs] = useState<string[]>([])
  const [selectedUf, setSelectedUf] = useState('0')

  const [cities, setCities] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState('0')
  
  
  const [selectedFile, setSelectedFile] = useState<File>()

  const devId = String(localStorage.getItem("devId"));


  useEffect(() => {
    api.get('techs').then(response => {
      setTechs(response.data)
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get<IBGEUfResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufinitials = response.data.map( uf => uf.sigla)
      setUfs(ufinitials)
    })
  }, [ufs])

  useEffect(() => {
    if(selectedUf === '0') {
      return
    }
    
    axios.get<IBGEUfResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`).then(response => {
      const ufinitials = response.data.map( uf => uf.sigla)
      setUfs(ufinitials)
    })
    
  }, [selectedUf])

  useEffect(() => {
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map( city => city.nome)
      setCities(cityNames)
    })
  }, [selectedUf, ufs])


  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value

    setSelectedUf(uf)
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
    const city = event.target.value

    setSelectedCity(city)
  }



  function handleInputChange( event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target

    setFormData({...formData, [name]:value})
  }

  function handleTextAreaChange( event: ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target

    setFormDataArea({...formDataArea, [name]:value})
  }

  function handleSelectTech(id:number){
    const alreadySelected = selectedTechs.findIndex(tech => tech === id)
    
    if (alreadySelected >= 0){
       const filteredTechs = selectedTechs.filter(tech => tech !== id)
       setSelectedTechs(filteredTechs)
    } else { 
         setSelectedTechs([...selectedTechs,id])
      }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    const {link} = formData
    const {description} = formDataArea
    const uf = selectedUf
    const city = selectedCity
    const techs = selectedTechs

    const data = new FormData()

      data.append('uf', uf)
      data.append('city', city)
      data.append('description', description)
      data.append('link', link)
      data.append('techs', techs.join(','))

      if(selectedFile){
        data.append('image', selectedFile)
      }
    
    await api.post('projects', data, {
      headers : {
        Authorization: devId,
      }
   })
    alert('Projeto criado')
  }

  return (
     <Grid>
       <Header />
       <Container>
         <Form onSubmit = {handleSubmit}>
           <Row>
           <Column>
           <Title>Cadastre seu projeto</Title>
           <Dropzone onFileUploaded={setSelectedFile} />  


          <FieldSet>

          <Field>
             <Label>Descrição</Label>
             <TextArea
             name = "description"
             id = "description"
             placeholder = "Descrição do projeto..." 
             onChange = {handleTextAreaChange}
              />
           </Field>

           <FieldRow>
            <Field>
               <Label>UF</Label>
               <Address name = "uf" id = "uf" value = {selectedUf} onChange = {handleSelectUf}>
                 <option value="0">Selecione UF</option>
                    {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                 ))}
               </Address>
           </Field>

           <Field style = {{marginLeft: 30}}>
             <Label>Cidade</Label>
             <Address name = "city" id = "city" value = {selectedCity} onChange = {handleSelectCity} >
               <option value="0">Selecione Cidade</option>
                {cities.map(city => (
               <option key={city} value={city}>{city}</option>
               ))}
             </Address>
           </Field>

          </FieldRow>
        </FieldSet>

        <Field>
          <Label>Link</Label>
          <InputLink 
             type="text"
             placeholder = "Digite o link do projeto"
             name="link"
             id="link"
             onChange = {handleInputChange}/>
        </Field>
        </Column>

        <Field>
          <Label style = {{
            marginTop: 45,
            marginLeft: 60,
            marginBottom: 20
            }}>
              Tecnologias utilizadas
           </Label>

          <TechsList>
            {techs.map(tech => {
               return (
                 <TechsListLi
                   key = {tech.id} 
                   onClick = {() => handleSelectTech(tech.id)}
                   className = {selectedTechs.includes(tech.id) ? 'selected' : ''}
                 >
                   <ImageProject src = {tech.image_url} alt={tech.title} />
                   <span>{tech.title}</span>
                </TechsListLi>
             )
           })}
          </TechsList>
        </Field>
       </Row>

       <Button type = "submit">Publicar</Button>
     </Form>   
    
     </Container>
     </Grid>
  )
}

export default CreateProject