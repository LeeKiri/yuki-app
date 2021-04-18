import { Form } from 'semantic-ui-react'

const InitialForm = () => {
    return ( 
        <Form>
        <Form.Group>
          <Form.Input label='First name' placeholder='First Name' width={6} />
          <Form.Input label='Last Name' placeholder='Last Name' width={6} />
          <Form.Input label='Email' placeholder='Betty@gmail.com' width={6} />
          <Form.Input label='Password' placeholder='Email' width={6} />
        </Form.Group>
        </Form>
     );
}
 
export default InitialForm;