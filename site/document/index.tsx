import React from 'react';
import { componentIndex, sortComponentIndex } from '../_util';
import { Route, RouteComponentProps } from 'react-router-dom';

import Nav from './component/Nav';
import Article from './Article';
import Aside from './component/Aside';
import Iframe from './component/Iframe';
import Footer from './component/Footer';

import Preface from './Preface';

const Document: React.FC<RouteComponentProps> = props => {
    const { match, location } = props;

    /**
     * 添加纯文本页面
     * @type 类型必须为 markdownOnly
     * @name 请创建 [name].md 在对应文件夹中 site\document\markdown
     * 在 site\document\markdown\index.ts 中创建对应的 import 和 export
     */
    const markdownOnly: ComponentIndex[] = [
        { name: 'introduce', type: 'markdownOnly', 'zh-CN': '介绍' },
        { name: 'variable', type: 'markdownOnly', 'zh-CN': '变量' },
    ];
    const newDirectoryStructure = markdownOnly.concat(componentIndex);
    function isMarkdownOnly(markdownOnly: ComponentIndex[]) {
        const name = location.pathname.split('/').pop();
        return markdownOnly.find(item => item.name === name);
    }

    function onClick(key: string) {
        console.log(key);
    }

    return (
        <div>
            <Nav />
            {match.isExact ? (
                <Preface />
            ) : (
                <main className="document-main">
                    <Aside structure={sortComponentIndex(newDirectoryStructure)} onClick={onClick} />
                    {newDirectoryStructure.map(item => (
                        <Route
                            key={item.name}
                            path={`/document/${item.name}`}
                            component={() => <Article item={item} />}
                        />
                    ))}

                    <Iframe
                        className={isMarkdownOnly(markdownOnly) ? 'hide' : ''}
                        src={`#${location.pathname.replace('document', 'instance')}`}
                    />
                </main>
            )}
            <Footer />
        </div>
    );
};

export default Document;
