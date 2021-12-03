// import fs from 'fs'
const fs = require('fs');

export const getProjectsNames = () => {
    let folders = fs.readdirSync('public/images/' + 'projects/')
    folders = folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    console.log('folders', folders);
    return folders;
}

export const getProjectsNamesAndCovers = () => {
    let result = [];
    let folders = fs.readdirSync('public/images/projects/')
    folders = folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    folders.forEach(el => {
        let files = fs.readdirSync('public/images/projects/' + el + '/')
        files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        const folderArr = el.split('-')
        const id = el;
        const name = folderArr[3]
        const year = folderArr[0]
        const temp = { id, name, year, cover: '/images/projects/' + el + '/' + files[0] }
        result.push(temp);
    })
    return result;
}

export const getProjectImages = (projectsID) => {
    let files = fs.readdirSync('public/images/' + 'projects/' + projectsID);
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    console.log('files', files)
    files = files.map(el => 'http://localhost:3000' + '/images/projects/' + projectsID + '/' + el)
    // files = files.map(el => '/public/images/projects/' + projectsID + '/' + el)
    return files;
}

export const getCategoriesNames = () => {
    let folders = fs.readdirSync('public/images/works/')
    folders = folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    return folders;
}

export const getWorksImages = (category, id) => {
    let files = fs.readdirSync('public' + '/images/works/' + category + '/' + id);
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    console.log('files', files)
    files = files.map(el => 'http://localhost:3000' + '/images/works/' + category + '/' + id + '/' + el)
    // files = files.map(el => '/public/images/projects/' + projectsID + '/' + el)
    return files;
}

export const getWorksPaths = () => {
    let temp = []
    let folders = fs.readdirSync('public/images/works/')
    folders = folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    folders.forEach(el => {
        let folders2 = fs.readdirSync('public/images/works/' + el + '/')
        folders2 = folders2.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        temp.push({
            category: el,
            ids: folders2
        });

    })
    return temp;
}

export const getWorks = () => {
    let result = [];
    let folders = fs.readdirSync('public/images/works/')
    folders = folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    folders.forEach(el => {
        let folders2 = fs.readdirSync('public/images/works/' + el + '/')
        folders2 = folders2.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        folders2.forEach(el2 => {
            let files = fs.readdirSync('public/images/works/' + el + '/' + el2 + '/')
            files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
            const folderArr = el2.split('-')
            const id = el + '/' + el2;
            const name = folderArr[3] || folderArr[1]
            const year = folderArr[0] || el
            const category = el
            const temp = { id, name, year, category, cover: '/images/works/' + el + '/' + el2 + '/' + files[0] }
            result.push(temp);
            console.log(result);
        });

    })
    return { categories: folders, works: result };
}

