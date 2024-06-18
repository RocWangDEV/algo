const input = [
    'common-plat-public-axb-api,/mp/axb/api/bind,common-plat-public-axb-gateway-gateway,/mp/axb/gw/bind',
    'engine-athena-athena_predict,ModelAccess,codis-codis-fuproxy-biz-public-ufsfastload_fuproxy,',
];

const treeData = {
    usn: 'common-plat-public-axb-api',
    path: '/mp/axb/api/bind',
    selected: false,
    children: [{
        usn: 'common-plat-public-axb-gateway-gateway',
        path: '/mp/axb/gw/bind',
        selected: false,
    }]
}

const getKey = (data) => {
    const usn = data.usn;
    const path = data.path;
    const key = usn + ',' + path;
    return key;
};

const getKeyFromLabel = (data, type) => {
    console.log(data, '<== data');
    const list = data?.split(',');
    if (Array.isArray(list) && list.length === 4) {
        if (type === 0) return list[0] + ',' + list[1];
        return list[2] + ',' + list[3];
    }
    return '';
};

function searchByFourData(data, source) {
    if (!source || !source.children) return;
    // clearPropertyData(source, 'selected');
    const record = [];
    data.forEach(label => record.push({ label, status: false }));
    for (const item of record) {
        const dfs = (topo, parent) => {
            topo.forEach(i => {
                console.log(getKey(i), '<==', item, getKeyFromLabel(item.label, 1), '<==');
                if (getKey(i) === getKeyFromLabel(item.label, 1) && getKey(parent) === getKeyFromLabel(item.label, 0)) {
                    console.log(i, '<== this');
                    i.selected = true;
                    item.status = true;
                }
                if (i.highlight) {
                    i.selected = true;
                }
                i.children && dfs(i.children, i);
            });
        };
        dfs(source.children, source);
    }
    console.log(record);
}

searchByFourData(input, treeData);
