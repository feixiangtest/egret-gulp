/**
 *
 * @author 
 *
 */
class Resources
{
    /**
     * 资源
     */
    public constructor(name: string,chinese: string)
    {
        this.name = name;
        this.chinese = chinese;
        this.isOver = false;
    }
    //名称
    public name: string;
    //中文名
    public chinese: string;
    //是否加载成功
    public isOver: boolean;
}
