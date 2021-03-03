### 限制图片宽高出现拉伸,要保持宽高比并填满

```
object-fit:cover
```

### 屏幕 dpr -- 响应式图片

```
<img
        src = "photo.png"
        sizes = “(min-width: 600px) 600px, 300px"
        srcset = “photo@1x.png 300w,
                       photo@2x.png 600w,
                       photo@3x.png 1200w,
>
```

### 改变 scroll 过于突兀，平滑滚动

```
scroll-behavior: smooth
```

### 滚动切换优化，定位临界点吸附

```
<style type="text/css">
 .scroll-box{
  width: 100%;height: 250px;white-space: nowrap;overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling:touch;
 }
 .scroll-box .item{width: 300px;height: 200px;display: inline-block;margin-right: 15px;text-align: center;background: #333;font: 16px/200px "微软雅黑";color: #fff;
scroll-snap-align: start;
  scroll-snap-stop:always;
 }
 .scroll-box .item:nth-child(even){background: #666;}
        </style>
<div class="scroll-box">
<div class="item">1</div>
<div class="item">2</div>
</div>
```
