import { Form } from "react-bootstrap";
import { SaveButtonStyled, DeleteButtonStyled } from "../styles";
import { FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const NoteForm = () => {
  return (
    <div>
      <Form style={{ marginTop: -140 }}>
        <Form.Group controlId="notename">
          <Form.Control placeholder="Note name" />
        </Form.Group>
        <Form.Group controlId="Textarea">
          <Form.Control as="textarea" style={{ height: 400, width: 800 }} />
        </Form.Group>
        <SaveButtonStyled>
          <FaSave></FaSave>
        </SaveButtonStyled>
      </Form>
      <DeleteButtonStyled>
        <AiFillDelete></AiFillDelete>
      </DeleteButtonStyled>
    </div>
  );
};

export default NoteForm;
