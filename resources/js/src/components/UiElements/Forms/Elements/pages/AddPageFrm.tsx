import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Toast } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const AddPageFrm = () => {
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [status,setStatus] = useState('draft');
    const [isSuccess, setSuccess] = useState(false);
    const variant = 'Success'
    let token = document.head.querySelector('meta[name="csrf-token"]');
    const handleChange = (text: string) => {
        setBody(text)
    }
    const modules = {
        toolbar: [
            [
                {
                    header: [1, 2, 3, 4, 5, 6],
                },
            ],
            [
                {
                    font: [],
                },
                {
                    size: [],
                },
            ],
            ['bold', 'italic', 'underline', 'strike'],
            [
                {
                    color: [],
                },
                {
                    background: [],
                },
            ],
            [
                {
                    script: 'super',
                },
                {
                    script: 'sub',
                },
            ],
            ['blockquote', 'code-block'],
            [
                {
                    list: 'ordered',
                },
                {
                    list: 'bullet',
                },
                {
                    indent: '-1',
                },
                {
                    indent: '+1',
                },
            ],
            [
                'direction',
                {
                    align: [],
                },
            ],
            ['link', 'image', 'video', 'formula'],
            ['clean'],
        ],
    }
    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ]

    const handleSubmit = () => {
        const pdata = {
            'name': title,
            'content': body,
            'status':status,
        }
        console.log(pdata);
        axios.post('/admin/pages', pdata)
            .then((res) => {
                console.log(res.data);
                if (res.data == "success") {
                    setSuccess(true)
                }
                else{
                    alert(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            {isSuccess && <Toast key={variant} className="align-items-center border-0">
                <Toast.Header
                    className={`rounded-3 bg-${variant.toLowerCase()}`}
                    closeVariant="white"
                >
                    {/* <Image src={bell} className="rounded me-3" /> */}
                    <h6 className="text-white mb-0 me-auto">News and Event Updated Successfully</h6>
                </Toast.Header>
            </Toast>}
            <Form method='post' action='/admin/pages'>
                {/* <Form.Control type='hidden' name='_token' value={token.content} /> */}
                <Row className="gy-6 gy-sm-8 gy-md-6">
                    <Col lg={12} sm={12}>
                        <Row>

                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="name">Title</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Title" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
                            </Col>
                            <Col sm={6} className="mt-3">
                                <Form.Label htmlFor="gurardName" >Status</Form.Label>
                                <Form.Select name='guard_name' onChange={(e)=>setStatus(e.target.value)} value={status} aria-label="Default select example" id="gurardName">
                                    <option value='draft'>Draft</option>
                                    <option value='published'>Published</option>
                                </Form.Select>
                            </Col>
                            <Col sm={12} className='mt-2'>
                                <Form.Label htmlFor='gurardName'>Content</Form.Label>
                                {/* <EditorFull/> */}
                                <div className="text-editor" style={{ height: '240px' }}>
                                    <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                        value={body}
                                        onChange={handleChange}
                                        style={{ height: '200px',borderColor:'gray' }}
                                        placeholder={'Body'}
                                    />
                                </div>
                            </Col>




                        </Row>
                    </Col>

                    <Col sm={12} className='mt-3'>
                        <Button type='button' variant={'primary'} onClick={() => handleSubmit()}>{'Save'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AddPageFrm