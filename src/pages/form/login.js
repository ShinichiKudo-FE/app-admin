import React, { Component } from 'react'
import { Form, Icon, Input, Button, Card, Checkbox} from 'antd';
import './form.less';
const FormItem = Form.Item;


class FormLogin extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('表单登录信息为: ', values);
            }
        });

    }
    

    // componentDidMount() {
    //     // To disabled submit button at the beginning.
    //     this.props.form.validateFields();
    // }

    render() {
        const { getFieldDecorator } = this.props.form;

        // Only show error after a field is touched.

        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                
                <Card title="登录垂直表单">
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: '300px' }}>
                        <FormItem>
                            {getFieldDecorator('userNames', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('passwords', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{display:'block'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);
