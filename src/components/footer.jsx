import React, {Component} from 'react'


export default class Footer extends Component {

    render() {
        return (<div className="footer">

            <div className="panel">

                <div className="resNav">资源导航:</div>

                <table className="footNav">
                    <tbody>
                    <tr>
                        <td><a href="https://github.com/dvajs/dva" target="_blank">dva</a></td>
                        <td><a href="https://fe-driver.github.io/vue-beauty/#!/components/radio" target="_blank">vue-beauty</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://idcos.github.io/antd-ember/#/document/switch" target="_blank">antd-ember</a></td>
                        <td><a href="https://www.iviewui.com/docs/guide/introduce" target="_blank">iviewui</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://okoala.github.io/vue-antd/#!/components" target="_blank">vue-antd</a></td>
                        <td><a href="https://g2.alipay.com/demo/" target="_blank">G2</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://mobile.ant.design/docs/react/introduce" target="_blank">mobile.ant.design</a></td>
                        <td>antd-phi</td>
                    </tr>
                    <tr>
                        <td><a href="http://amis.baidu.com/docs/demo/forms/mode"> amis </a> </td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>


            </div>

        </div>);
    }

}