var exporter = {};

exporter.download = function (fileName, data)
{
    var download = document.createElement('a');
    download.href = data;
    download.target = '_blank';
    download.download = fileName;
    download.style.display = 'none';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
};

exporter.exportImage = function (format, colors, name)
{
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 100 * colors.length;
    canvas.height = 130;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 500, 130);

    for (var i = 0; i < colors.length; i++)
    {
        context.fillStyle = "#" + colors[i];
        context.fillRect(100 * i, 0, 100, 100);
    }
    for (var i = 0; i < colors.length; i++)
    {
        context.fillStyle = "#000000";
        context.font = "20px sans-serif";
        context.fillText("#" + colors[i], 100* i + 5, 120);
        
    }

    var fileName = ''.concat(name, '.').concat(format);
    var data = canvas.toDataURL('image/'.concat(format));
    this.download(fileName, data);
};

exporter.exportTextFile = function (colors, name)
{
    var text = "#" + colors.join('\r\n#');
    var data = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    this.download(name + '.txt', data);
};

exporter.exportStylesheet = function (format, colors, name)
{
    var text = '';

    if (format == 'css')
    {
        for (var i = 0; i < colors.length; i++)
        {
            text += '.color'.concat(i + 1, ' { color: #').concat(colors[i], '; }\r\n');
        }
    }
    else if (format == 'scss')
    {
        for (var _i = 0; _i < colors.length; _i++)
        {
            text += '$color'.concat(_i + 1, ': #').concat(colors[_i], ';\r\n');
        }
    }
    else
    {
        console.error('Wrong format!');
        return;
    }

    var fileName = ''.concat(name, '.').concat(format);
    var data = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    this.download(fileName, data);
};